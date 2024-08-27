import { Container, Filters, Title, TopBar } from '@/components/shared'

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title text='All pizzas' size='lg' className='font-extrabold' />
			</Container>
			<TopBar />

			<Container className='mt-9 pb-14'>
				<div className='flex gap-[60px]'>
					{/* filtration */}
					<div className='w-[250px]'>
						<Filters />
					</div>

					{/* products list */}
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>products list</div>
					</div>
				</div>
			</Container>
		</>
	)
}
