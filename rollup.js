export default {
    input: 'src/index.js',
    output: {
        file: 'index.js',
        dir: 'dist',
        name: 'react-use-request',
        format: 'umd'
    },
    external: [
        'react',
        'axios',
        'react-dom'
    ]
}