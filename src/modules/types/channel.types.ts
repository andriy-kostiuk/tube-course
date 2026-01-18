export interface Channel {
  id: string
  handle: string
  bio: string
  avatarPath: string
  bannerPath: string
  ownerId: string
  createdAt: string
  updatedAt: string
  owner: {
    id: string
    name: string
    email: string
  }
  videoCount: number
  followersCount: number
  isSubscribed: boolean
}
