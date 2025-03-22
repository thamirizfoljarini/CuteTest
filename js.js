document.getElementById('card').addEventListener('click', function() {
    this.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", function() {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
      root: null,
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  // Adicione um evento de clique no documento para iniciar as animações
  const startAnimations = () => {
      fadeElements.forEach(element => {
          observer.observe(element);
      });
      document.removeEventListener('click', startAnimations); // Remove o evento após o primeiro clique
  };

  document.addEventListener('click', startAnimations);

  const hearts = document.querySelectorAll('.heart');

  hearts.forEach(heart => {
      // Inicialmente, garanta que todos os corações estejam fechados
      heart.classList.remove('open');

      // Adicione um evento de clique para abrir/fechar o coração
      heart.addEventListener('click', function() {
          heart.classList.toggle('open');
      });
  });
});

/* Animação para fechar o lado esquerdo */
const closeLeft = `
  @-webkit-keyframes closeLeft {
    from {
      -webkit-transform: rotateY(0deg);
    }
    to {
      -webkit-transform: rotateY(180deg);
    }
  }
  @-moz-keyframes closeLeft {
    from {
      -moz-transform: rotateY(0deg);
    }
    to {
      -moz-transform: rotateY(180deg);
    }
  }
  @-ms-keyframes closeLeft {
    from {
      -ms-transform: rotateY(0deg);
    }
    to {
      -ms-transform: rotateY(180deg);
    }
  }
  @keyframes closeLeft {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(180deg);
    }
  }
`;

/* Animação para fechar o lado direito */
const closeRight = `
  @-webkit-keyframes closeRight {
    from {
      -webkit-transform: rotateY(180deg) scaleY(-1);
    }
    to {
      -webkit-transform: rotateY(0deg) scaleY(-1);
    }
  }
  @-moz-keyframes closeRight {
    from {
      -moz-transform: rotateY(180deg) scaleY(-1);
    }
    to {
      -moz-transform: rotateY(0deg) scaleY(-1);
    }
  }
  @-ms-keyframes closeRight {
    from {
      -ms-transform: rotateY(180deg) scaleY(-1);
    }
    to {
      -ms-transform: rotateY(0deg) scaleY(-1);
    }
  }
  @keyframes closeRight {
    from {
      transform: rotateY(180deg) scaleY(-1);
    }
    to {
      transform: rotateY(0deg) scaleY(-1);
    }
  }
`;

/* Animação para abrir o lado esquerdo */
const openLeft = `
  @-webkit-keyframes openLeft {
    from {
      -webkit-transform: rotateY(180deg);
    }
    to {
      -webkit-transform: rotateY(0deg);
    }
  }
  @-moz-keyframes openLeft {
    from {
      -moz-transform: rotateY(180deg);
    }
    to {
      -moz-transform: rotateY(0deg);
    }
  }
  @-ms-keyframes openLeft {
    from {
      -ms-transform: rotateY(180deg);
    }
    to {
      -ms-transform: rotateY(0deg);
    }
  }
  @keyframes openLeft {
    from {
      transform: rotateY(180deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }
`;

/* Animação para abrir o lado direito */
const openRight = `
  @-webkit-keyframes openRight {
    from {
      -webkit-transform: rotateY(0deg) scaleY(-1);
    }
    to {
      -webkit-transform: rotateY(180deg) scaleY(-1);
    }
  }
  @-moz-keyframes openRight {
    from {
      -moz-transform: rotateY(0deg) scaleY(-1);
    }
    to {
      -moz-transform: rotateY(180deg) scaleY(-1);
    }
  }
  @-ms-keyframes openRight {
    from {
      -ms-transform: rotateY(0deg) scaleY(-1);
    }
    to {
      -ms-transform: rotateY(180deg) scaleY(-1);
    }
  }
  @keyframes openRight {
    from {
      transform: rotateY(0deg) scaleY(-1);
    }
    to {
      transform: rotateY(180deg) scaleY(-1);
    }
  }
`;

/* Adiciona as animações ao documento */
const styleSheet = document.createElement("style");
styleSheet.innerText = closeLeft + closeRight + openLeft + openRight;
document.head.appendChild(styleSheet);