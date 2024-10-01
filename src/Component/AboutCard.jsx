
function AboutCard({title="",img="",details="" , style=""}) {
  return (
    <main className="flex flex-col group hover:bg-white hover:text-black max-w-72 p-5 text-center justify-center border border-white rounded-3xl gap-3">
        <div style={{borderRadius:`30% 70% 48% 52% / 36% 42% 58% 64% `}} className={` group-hover:bg-primary w-fit  p-6 self-center ${style}`}><img className="h-16" src={img} alt="" /></div>
      <h3 className="font-bold text-3xl">{title}</h3>
      <span>{details}</span>
    </main>
  )
}

export default AboutCard
