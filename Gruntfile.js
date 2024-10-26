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
  });

  // Carregar os plugins do Grunt
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-copy");

  // Registrar a tarefa padrão
  grunt.registerTask("default", ["clean", "less", "uglify", "copy"]);

  // Definindo a tarefa de build
  grunt.registerTask("build", ["clean", "less", "uglify", "copy"]);
};
