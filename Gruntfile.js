module.exports = function (grunt) {
  // Configuração do Grunt
  grunt.initConfig({
    // Limpeza da pasta dist
    clean: {
      build: ["dist/"],
    },
    // Compilação do LESS
    less: {
      development: {
        files: {
          "dist/styles/main.css": "src/styles/main.less",
        },
      },
    },
    // Compressão de código JavaScript
    uglify: {
      my_target: {
        files: {
          "dist/scripts/main.min.js": ["src/scripts/main.js"],
        },
      },
    },
    // Cópia do arquivo index.html para a pasta dist
    copy: {
      main: {
        files: [
          {
            expand: true,
            src: ["index.html"],
            dest: "dist/",
            flatten: true,
          },
        ],
      },
    },
    // Substituição de caminhos CSS e JS com o grunt-replace
    replace: {
      paths: {
        options: {
          patterns: [
            {
              match: /dist\/styles\/main.css/g, // Caminho antigo do CSS no HTML
              replacement: "styles/main.css", // Novo caminho do CSS
            },
            {
              match: /dist\/scripts\/main.min.js/g, // Caminho antigo do JS no HTML
              replacement: "scripts/main.min.js", // Novo caminho do JS
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ["dist/index.html"], // Arquivo onde a substituição será feita
            dest: "dist/", // Pasta de destino
          },
        ],
      },
    },
  });

  // Carregar os plugins do Grunt
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-replace");

  // Registrar a tarefa padrão
  grunt.registerTask("default", ["clean", "less", "uglify", "copy", "replace"]);

  // Definindo a tarefa de build
  grunt.registerTask("build", ["clean", "less", "uglify", "copy", "replace"]);
};
