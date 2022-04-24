const l298n1 = formatMessage => ({
    name: 'L298N1',
    extensionId: 'l298n1',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'nulllab', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266'],
    author: 'Liang',
    iconURL: `asset/l298n.png`,
    description: formatMessage({
        id: 'l298n.description',
        default: 'Common high power dual motor drive module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['userExt'],
    helpLink: 'https://openblockcc.gitee.io/wiki/main'
});

module.exports = l298n1;
