import NextLink from 'next/link'
import { ListIcon, LinkBox, LinkOverlay } from '@chakra-ui/layout'

const MenuItem = ({ props }) => {
  return (
    <LinkBox>
      <NextLink href={props.route} passHref>
        <LinkOverlay>
          <ListIcon as={props.icon} color="white" marginRight="20px" />
          {props.name}
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  )
}

export default MenuItem
