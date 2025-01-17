import { FC } from 'react'
import styled from 'styled-components'

const StyledAvatarImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 7px;
  object-fit: cover;
  user-select: none;
`

export interface AvatarProps {
  name: string
}

const Avatar: FC<AvatarProps> = ({ name }) => {
  const formattedName = name.replace(/\s+/g, '') // Remove spaces
  return (
    <StyledAvatarImg
      src={`https://unavatar.io/github/${formattedName}`}
      alt={`${name}'s avatar'`}
      draggable={false}
    />
  )
}

export default Avatar
