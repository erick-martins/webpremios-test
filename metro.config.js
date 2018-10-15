const MY_REGEX = 'src/target/.*'
module.exports = {
    resolver: {
        /* resolver options */
    },
    transformer: {
        /* transformer options */
    },
    serializer: {
        /* serializer options */
        postProcessModules: function(modules, entryFiles) {
            return modules.filter(module => !module.path.match(MY_REGEX));
        },
    },
    server: {
        /* server options */
    },
}