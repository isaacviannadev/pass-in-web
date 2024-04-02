import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from 'lucide-react';

export function AttendeeList() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-3'>
        <h1 className='text-2xl font-bold'>Participantes</h1>
        <div className='px-3 py-1.5 w-72 border border-white/10 rounded-lg text-sm flex items-center gap-3'>
          <Search size={16} className='text-emerald-300' />
          <input
            className='bg-transparent flex-1 outline-none border-0 p-0 text-sm'
            type='text'
            placeholder='Buscar Participantes...'
          />
        </div>
      </div>

      <div className='border border-white/10 rounded-lg'>
        <table className='w-full '>
          <thead className='border-b border-white/10 '>
            <tr>
              <th
                style={{ width: 48 }}
                className='py-3 px-4 text-sm font-semibold text-left'
              >
                <input
                  type='checkbox'
                  className='size-4 bg-black/20 rounded border-white/10'
                />
              </th>
              <th className='py-3 px-4 text-sm font-semibold text-left'>
                Código
              </th>
              <th className='py-3 px-4 text-sm font-semibold text-left'>
                Participante
              </th>
              <th className='py-3 px-4 text-sm font-semibold text-left'>
                Data de inscrição
              </th>
              <th className='py-3 px-4 text-sm font-semibold text-left'>
                Data do check-in
              </th>
              <th
                style={{ width: 64 }}
                className='py-3 px-4 text-sm font-semibold text-left'
              ></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, index) => {
              return (
                <tr
                  key={index}
                  className='border-b border-white/10 hover:bg-white/5'
                >
                  <td className='py-3 px-4 text-sm text-zinc-300'>
                    <input
                      type='checkbox'
                      className='size-4 bg-black/20 rounded border-white/10'
                    />
                  </td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>123456</td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>
                    <div className='flex flex-col gap-1'>
                      <span className='font-semibold text-white'>
                        Isaac dos Santos Vianna
                      </span>
                      <span>isaacsvianna@gmail.com</span>
                    </div>
                  </td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>
                    4 dias atrás
                  </td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>
                    2 dias atrás
                  </td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>
                    <button
                      type='button'
                      className='bg-black/20 border border-white/10 rounded-md p-1.5'
                    >
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={3} className='py-3 px-4 text-sm text-zinc-300'>
                Mostrando 10 de 215 itens
              </td>
              <td
                colSpan={3}
                className='py-3 px-4 text-sm text-zinc-300 text-right'
              >
                <div className='inline-flex gap-8 items-center'>
                  <span>Página 1 de 22</span>

                  <div className='flex gap-1.5'>
                    <button
                      type='button'
                      className='bg-white/10 border border-white/20 rounded-md p-1.5'
                    >
                      <ChevronsLeft size={16} />
                    </button>
                    <button
                      type='button'
                      className='bg-white/10 border border-white/20 rounded-md p-1.5'
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      type='button'
                      className='bg-white/10 border border-white/20 rounded-md p-1.5'
                    >
                      <ChevronRight size={16} />
                    </button>
                    <button
                      type='button'
                      className='bg-white/10 border border-white/20 rounded-md p-1.5'
                    >
                      <ChevronsRight size={16} />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
