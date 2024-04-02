import { usePoke } from 'entities/Pokemon/libs/usePoke'

export const Pokemon = ({ name }: { name: string }) => {
  const poke = usePoke(name)

  console.log('poek', poke)

  if (poke.isError) {
    return <div>Error</div>
  }

  if (poke.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <img src={poke.data.sprites.front_default} alt="" />
    </div>
  )
}
