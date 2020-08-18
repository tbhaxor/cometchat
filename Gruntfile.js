module.exports = (grunt) => {
  grunt.initConfig({
    ts: {
      default: {
        outDir: "dist/",
        src: ["src/**/*.ts"],
      },

      options: {
        removeComments: false,
        declaration: true,
        rootDir: "src",
      },
    },
  });

  grunt.loadNpmTasks("grunt-ts");

  grunt.registerTask("default", ["ts"]);
};
