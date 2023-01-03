import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	UseDisclosureReturn,
} from '@chakra-ui/react';
import React from 'react';
import { NavContent } from './NavContent';

interface NavbarProps {
	disclosure: UseDisclosureReturn;
}

export const Navbar = ({ disclosure }: NavbarProps) => {
	const { isOpen, onClose } = disclosure;

	return (
		<Drawer isOpen={isOpen} onClose={onClose}>
			<DrawerOverlay>
				<DrawerContent bg='background'>
					<DrawerCloseButton mt={5} color={'text'} fontSize={18} />

					<DrawerBody>
						<NavContent isMobile />
					</DrawerBody>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	);
};
