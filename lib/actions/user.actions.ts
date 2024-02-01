'use server'

import { CreateUserParams, UpdateUserParams } from "@/types"

import User from "@/lib/database/models/user.model"
import Event from "@/lib/database/models/event.model"
import Order from "@/lib/database/models/order.model"
import { connectToDatabase } from "@/lib/database"

import { handleError } from "@/lib/utils"

// Create user.
export const createUser = async (user: CreateUserParams) => {
  try {
    await connectToDatabase()
    const newUser = await User.create(user)
    return JSON.parse(JSON.stringify(newUser))

  } catch (error) {
    handleError(error)
  }
}

// Update user.
export const updateUser = async (clerkId: string, data: UpdateUserParams) => {
  try {
    await connectToDatabase()
    const updatedUser = await User.findByIdAndUpdate({ clerkId }, data, { new: true })
    if (!updatedUser) throw new Error('User update failed.')
    return JSON.parse(JSON.stringify(updatedUser))

  } catch(error) {
    handleError(error)
  }
}

// Delete user.
export const deleteUser = async (clerkId: string) => {
  try {
    await connectToDatabase()
    const deletedUser = await User.findOneAndDelete({ clerkId })
    if (!deletedUser) throw new Error('User not found')

    // Unlink relationships
    await Promise.all([
      Event.updateMany(
        { _id: { $in: deletedUser.events }},
        { $pull: { organizer: deletedUser._id }}
      ),
      Order.updateMany(
        { _id: { $in: deletedUser.orders }},
        { $unset: { buyer: 1 }}
      )
    ])

  } catch (error) {
    handleError(error)
  }
}