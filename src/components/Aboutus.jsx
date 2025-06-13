// AboutUs.jsx
import { motion } from 'framer-motion';
import { Sparkles, Flame, PartyPopper } from 'lucide-react';

function AboutUs() {
  return (
    <div
      className="w-full bg-gradient-to-br from-yellow-50 to-red-100 py-16 px-6 md:px-20 overflow-hidden"
      id="about"
    >
      {/* Firecracker icons animation at top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="flex justify-center space-x-6 mb-6"
      >
        <PartyPopper color="#f87171" size={40} />
        <Sparkles color="#facc15" size={40} />
        <Flame color="#f87171" size={40} />
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4 tracking-wide relative">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block"
          >
            About <span className="text-yellow-600">Pon Crackers</span>
          </motion.span>
        </h2>

        <motion.p
          className="text-lg text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          🎉 At <span className="font-semibold text-red-500">Pon Crackers</span>, we bring fireworks and festivals together! Based in Sivakasi, we specialize in high-quality, eco-friendly fireworks to light up every moment.
        </motion.p>

        <motion.p
          className="text-md text-gray-600"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          With decades of experience and certified safety, our fireworks create magical memories for Diwali, weddings, and grand openings. We don’t just sell crackers — we ignite celebrations! 💥
        </motion.p>
      </motion.div>

      {/* Sparkles below */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="flex justify-center space-x-6 mt-10"
      >
        <Sparkles color="#facc15" size={36} />
        <PartyPopper color="#ef4444" size={36} />
        <Sparkles color="#facc15" size={36} />
      </motion.div>
    </div>
  );
}

export default AboutUs;
