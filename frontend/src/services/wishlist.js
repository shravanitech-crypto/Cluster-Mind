const WISHLIST_KEY = "clustermind_wishlist";

const listeners = new Set();

const read = () => {
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_KEY) || "[]");
  } catch {
    return [];
  }
};

const write = (list) => {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
  listeners.forEach((fn) => fn(list));
};

export const subscribeWishlist = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

export const getWishlist = () => read();

export const getWishlistCount = () => read().length;

export const isInWishlist = (productId) =>
  read().some((p) => p.productId === productId);

export const addToWishlist = (product) => {
  const list = read();
  if (!list.some((p) => p.productId === product.id)) {
    list.push({ productId: product.id, addedAt: Date.now() });
  }
  write(list);
  return list;
};

export const removeFromWishlist = (productId) => {
  const list = read().filter((p) => p.productId !== productId);
  write(list);
  return list;
};
