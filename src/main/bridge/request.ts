import { spawn as spwn } from 'child_process'

type Methods = 'getProdsBySearch'

export interface Product {
  id: number
  code: string
  secondCode: string
  description: string
  department: string
  category: string
  cost: number
  sellPrice: number
  currency: string
  artNum: number
  minQuantity: number
}

const spawn = (cmd: string, args: ReadonlyArray<string>): Promise<string> => {
  return new Promise((resolve, reject) => {
    const cp = spwn(cmd, args)
    const error: string[] = []
    const stdout: string[] = []
    cp.stdout.on('data', (data) => {
      stdout.push(data.toString())
    })

    cp.on('error', (e) => {
      error.push(e.toString())
    })

    cp.on('close', () => {
      if (error.length) reject(error.join(''))
      else resolve(stdout.join(''))
    })
  })
}

export async function requestApi(
  method: Methods,
  args: (string | number | boolean)[]
): Promise<string | void> {
  const argsJson = JSON.stringify({ method: method, args: args })
  try {
    return await spawn('java', [
      '-cp',
      'C:\\Users\\Jacobo Morales\\Desktop\\AYER\\dsk2\\db__\\Main\\out\\production\\Main;C:\\Users\\Jacobo Morales\\Downloads\\postgresql-42.7.7.jar;C:\\Users\\Jacobo Morales\\Downloads\\gson-2.13.1.jar',
      'Main',
      argsJson
    ])
  } catch (err) {
    console.log(err)
    if (typeof err === 'string') throw new Error(err)
    return ''
  }
}
