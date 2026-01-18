import { Channel } from '@/modules/types/channel.types'

const MOCK_CHANNELS: Channel[] = [
  {
    id: 'channel-1',
    handle: 'code-master',
    bio: 'Programing',
    avatarPath: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png',
    bannerPath: 'null',
    ownerId: 'user-1',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    owner: {
      id: 'user-2',
      name: 'Code Master',
      email: 'test@gmail.com',
    },
    videoCount: 200,
    followersCount: 2000,
    isSubscribed: true,
  },
  {
    id: 'channel-2',
    handle: 'code-master-1',
    bio: 'Programing',
    avatarPath: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png',
    bannerPath: 'null',
    ownerId: 'user-13',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    owner: {
      id: 'user-3',
      name: 'Code Master 1',
      email: 'test@gmail.com',
    },
    videoCount: 200,
    followersCount: 2000,
    isSubscribed: true,
  },
]

export const useChannel = (handle: string) => {
  const channel = MOCK_CHANNELS.find((channel) => channel.handle === handle)

  return {
    data: channel,
    isLoading: false,
    error: null,
  }
}

export const useMyChannels = () => {
  return {
    data: MOCK_CHANNELS,
    isLoading: false,
    error: null,
  }
}
