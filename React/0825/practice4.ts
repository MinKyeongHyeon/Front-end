function getFirstElement<T>(arr:T[]):T|undefined{
  return arr.length > 0 ? arr[0]:undefined
}

interface DataStorage<K, V> {
  setItem(key: K, value: V): void;
  getItem(key: K): V | undefined;
}

