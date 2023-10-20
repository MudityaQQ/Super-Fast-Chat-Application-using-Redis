import Button from './components/ui/Button'
import { db } from './lib/db'

export default async function  Home() {

  await db.set('hello', 'jello');
  return (
  <main>
    <h1 className='text-red-900'>hello world</h1>
  </main>
  )
}
