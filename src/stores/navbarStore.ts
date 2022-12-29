import { writable } from 'svelte/store';

const createNavbarStore = () => {
	const { subscribe, set, update } = writable(false);
	return {
		subscribe,
		toggleMenu: () => update(isMenuOpen => !isMenuOpen),
		closeMenu: () => set(false),
	};
};

export const navbarStore = createNavbarStore();
