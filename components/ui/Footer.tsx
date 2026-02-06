import { Mail, Phone, Github, Linkedin, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Ana Carolina Damore</h3>
            <p className="text-sm leading-relaxed mb-4">
              Front-End & UI Developer especializada em criar experiências digitais
              excepcionais com as tecnologias mais modernas.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/acarolinadamore"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/acarolinadamore"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#sobre" className="hover:text-white transition-colors">
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#orcamento" className="hover:text-white transition-colors">
                  Solicitar Orçamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:acarolinadamore@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  acarolinadamore@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href="https://wa.me/5567992429385"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (67) 99242-9385
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 text-center text-sm">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Ana Carolina Damore. Desenvolvido com
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            e muito café.
          </p>
        </div>
      </div>
    </footer>
  );
}
