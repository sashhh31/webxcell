// src/components/sections/CallToAction.jsx
import Button from '../ui/Button';

export default function CallToAction() {
  return (
    <section className="bg-primary text-lightText py-16 px-8 text-center my-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Ready to Transform Your Digital Presence?
      </h2>
      <p className="text-xl md:text-2xl mb-8">
        Let's build something amazing together.
      </p>
      <Button href="/contact" variant="secondary" className="bg-darkBg hover:bg-gray-700">
        GET A FREE CONSULTATION
      </Button>
    </section>
  );
}