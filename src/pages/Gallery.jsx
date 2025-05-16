

const images = ['/bgImg.png', '/bgImg.png', '/bgImg.png']
const Gallery = () => (
  <section className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {images.map((src, i) => (
      <img key={i} src={src} alt={`Gallery ${i}`} className="rounded-xl shadow-md" />
    ))}
  </section>
)
export default Gallery
