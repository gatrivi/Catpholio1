/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Hero } from '../components/Hero';
import { PainPoints } from '../components/PainPoints';
import { HowItWorks } from '../components/HowItWorks';
import { Pricing } from '../components/Pricing';
import { Contact } from '../components/Contact';
import { WhatsAppFloat } from '../components/WhatsAppFloat';

// Note: DigitalMenu page uses DIGITAL_MENU_CONTENT which is currently handled 
// inside the components by importing from ../content. 
// We might need to refactor components to accept content as props for better reuse,
// but for now, we'll keep it as is if they are specifically built for this.

export const DigitalMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Pricing />
      <Contact />
      <WhatsAppFloat />
    </motion.div>
  );
};
