
import { CollectibleItem } from '@/components/CollectibleCard';

export const collectibles: CollectibleItem[] = [
  {
    id: 1,
    name: "Pixel Dragon",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rarity: "legendary",
    price: 500,
    owner: "pixelmaster"
  },
  {
    id: 2,
    name: "Retro Sword",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rarity: "rare",
    price: 150,
    owner: "gamerunner"
  },
  {
    id: 3,
    name: "Magic Potion",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rarity: "uncommon",
    price: 75
  },
  {
    id: 4,
    name: "Ancient Shield",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rarity: "epic",
    price: 320,
    owner: "cryptohunter"
  },
  {
    id: 5,
    name: "Health Crystal",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rarity: "common",
    price: 30
  },
  {
    id: 6,
    name: "Fire Amulet",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rarity: "rare",
    price: 180,
    owner: "elementalist"
  },
  {
    id: 7,
    name: "Ice Crown",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rarity: "epic",
    price: 280
  },
  {
    id: 8,
    name: "Wooden Staff",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rarity: "common",
    price: 25,
    owner: "wizardly"
  }
];

export const getFeaturedCollectible = (): CollectibleItem => {
  return collectibles.find(item => item.rarity === "legendary") || collectibles[0];
};

export const getCollectibleById = (id: number): CollectibleItem | undefined => {
  return collectibles.find(item => item.id === id);
};

export const getCollectiblesByRarity = (rarity: CollectibleItem['rarity']): CollectibleItem[] => {
  return collectibles.filter(item => item.rarity === rarity);
};
