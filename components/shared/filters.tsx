import React from 'react'
import { FilterCheckbox, RangeSlider, Title } from '.'
import { Input } from '../ui'

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Title text='Filtering' size='sm' className='mb-5 font-bold' />

			<div className='flex flex-col gap-4'>
				<FilterCheckbox text='Build yours' value='1' />
				<FilterCheckbox text='New' value='2' />
			</div>

			<div className='mt-5 border-y border-y-neutral-100 py-5 pb-7'>
				<p className='font-bold mb-3'>Price from and to:</p>
				<div className='flex gap-3 mb-5'>
					<Input type='number' placeholder='0' min={0} max={50} />
					<Input type='number' placeholder='50' min={0} max={50} />
				</div>

				<RangeSlider min={0} max={50} step={1} value={[0, 50]} />
			</div>
		</div>
	)
}
