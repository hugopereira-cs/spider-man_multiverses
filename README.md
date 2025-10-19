# 🕷️ Spider-Man Multiverses

Um site interativo que celebra os diferentes multiversos do Homem-Aranha no cinema, apresentando as trilogias de Tobey Maguire, Andrew Garfield e Tom Holland.

## 📋 Sobre o Projeto

Este projeto é uma landing page imersiva e interativa, que faz parte do bootcamp de Front-end da [DIO](https://dio.me), e permite aos fãs explorar os filmes do Homem-Aranha através de um carrossel 3D inovador. Cada versão cinematográfica do herói possui suas próprias páginas dedicadas com informações detalhadas sobre os filmes.

## ✨ Funcionalidades

### Página Inicial
- **Carrossel 3D Interativo**: Navegue entre os três Spider-Man com efeitos de rotação em perspectiva
- **Efeitos Hover**: Ao passar o mouse sobre cada card, veja animações de escala e mudança de fundo
- **Controles de Navegação**: Botões numerados para alternar entre os personagens
- **Design Responsivo**: Interface adaptada para diferentes dispositivos

### Páginas Internas dos Filmes
Cada filme possui sua própria página com:
- **Vídeo de Fundo**: Trailer em loop automático
- **Informações do Filme**: 
  - Ano de lançamento
  - Diretor
  - Sinopse completa
- **Link para Trailer**: Acesso direto ao trailer no YouTube
- **Galeria de Imagens**: Visualização de fotos do filme com lightbox (Fancybox)
- **Navegação Lateral**: Menu vertical estilizado para alternar entre filmes da mesma trilogia

## 🎬 Filmes Incluídos

### Tobey Maguire
- Homem-Aranha (2002)
- Homem-Aranha 2 (2004)
- Homem-Aranha 3 (2007)

### Andrew Garfield
- O Espetacular Homem-Aranha (2012)
- O Espetacular Homem-Aranha 2 (2014)

### Tom Holland
- Homem-Aranha: De Volta ao Lar (2017)
- Homem-Aranha: Longe de Casa (2019)
- Homem-Aranha: Sem Volta para Casa (2021)

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: 
  - Flexbox para layouts
  - Transforms 3D para o carrossel
  - Transitions e animations
  - Custom properties (variáveis CSS)
- **JavaScript**: Interatividade e manipulação do DOM
- **Google Fonts**: Família tipográfica Poppins
- **Fancybox 6.0**: Galeria de imagens com lightbox

## 📁 Estrutura do Projeto

```
spider-man-multiverses/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   ├── reset.css
│   │   ├── global.css
│   │   ├── home-page-styles.css
│   │   ├── internal.css
│   │   └── components/
│   │       ├── gallery.css
│   │       ├── link-button.css
│   │       ├── navigator.css
│   │       └── pills.css
│   ├── scripts/
│   │   └── script.js
│   ├── images/
│   │   ├── icons/
│   │   ├── spiderman-tobey/
│   │   ├── spiderman-andrew/
│   │   └── spiderman-tom/
│   └── videos/
└── pages/
    ├── tobey-maguire/
    │   ├── spiderman1.html
    │   ├── spiderman2.html
    │   └── spiderman3.html
    ├── andrew-garfield/
    │   ├── spiderman1.html
    │   └── spiderman2.html
    └── tom-holland/
        ├── spiderman1.html
        ├── spiderman2.html
        └── spiderman3.html
```

## 🎨 Características de Design

### Página Inicial
- Cor primária: `#b9001f` (vermelho Spider-Man)
- Background com overlay de opacidade
- Cards com bordas brancas e efeitos de transição
- Carrossel com perspectiva 3D (3000px)
- Rotação de 120° entre cada card

### Páginas Internas
- Layout em duas colunas (navegação + conteúdo)
- Vídeos de fundo em autoplay e loop
- Descrições com fundo semi-transparente
- Pills (badges) para informações rápidas
- Galeria de imagens responsiva

## 🚀 Como Executar

1. Clone o repositório
2. Abra o arquivo `index.html` em um navegador moderno
3. Navegue entre os diferentes Spider-Man clicando nos cards ou nos botões de controle
4. Explore as páginas internas clicando nos cards ou usando o menu superior

## 💡 Funcionalidades JavaScript

### Carrossel
- Rotação automática baseada em cliques
- Cálculo dinâmico de ângulos: `-120° × (ID - 1)`
- Gestão de classes para botões ativos

### Cards Interativos
- Event listeners para `mouseenter` e `mouseleave`
- Alteração dinâmica do `body.id` para controlar backgrounds
- Adição/remoção de classes para animações

## 📱 Responsividade

O site utiliza unidades relativas (`vh`, `vw`, `rem`) para garantir uma experiência consistente em diferentes tamanhos de tela.

## 🎯 Destaques Técnicos

- **CSS Transform 3D**: Carrossel com `rotateY()` e `translateZ()`
- **CSS Variables**: Uso de custom properties para manutenção facilitada
- **Semantic HTML**: Estrutura acessível e bem organizada
- **Component-based CSS**: Arquitetura modular e reutilizável
- **Progressive Enhancement**: Funcionalidades que degradam graciosamente

## 📄 Licença

Este é um projeto educacional/demonstrativo sobre os filmes do Homem-Aranha.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

Desenvolvido com ❤️ por fãs do Homem-Aranha 🕷️