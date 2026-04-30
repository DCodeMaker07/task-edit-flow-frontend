import React from 'react'

type Props = {
    pages: number[],
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    pageSize: number,
    setPageSize: React.Dispatch<React.SetStateAction<number>>,
}

export const UserPagination = ({ pages, page, setPage, pageSize, setPageSize }: Props) => {
    return (
        <div className='flex flex-col gap-4 lg:flex-row justify-between items-center'>
            <div className="join mt-4 self-center">
                {pages.map((p) => (
                    <button
                        key={p}
                        className={`join-item btn ${p === page ? 'btn-active' : ''}`}
                        onClick={() => setPage(p)}
                    >
                        {p}
                    </button>
                ))}
            </div>

            <div>
                <select className="select" value={pageSize} onChange={(e) => setPageSize(parseInt(e.target.value))}>
                    {
                        Array.from({ length: 10 }, (_, i) => i + 1).map((value, i) => (
                            <option key={i} value={value}>{value}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}
