const socket = require('../../lib/socket');

const cSocket = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_TCP);

const a = 1;
const res = cSocket.setsockopt(socket.IPPROTO_IP, socket.IP_HDRINCL, a);

console.log(res);

// const bf = new Uint8Array([
//   0x45,0x00,0x40,0x00,
//   0x4c,0xd8,0x00,0x00,
//   0x40,0x01,0x00,0x00,
//   0x7f,0x00,0x00,0x01,
//   0x7f,0x00,0x00,0x01,
//   0x03,0x03,0xbc,0xc4,
//   0x00,0x00,0x00,0x00,
//   0x45,0x00,0x20,0x00,
//   0xd2,0x20,0x00,0x00,
//   0x40,0x11,0xe9,0x02,
//   0xc0,0xa8,0x1f,0x58,
//   0xc0,0xa8,0x1f,0x01,
//   0xc7,0x84,0x00,0xc0,
//   0x00,0x0c,0x64,0xd6,
//   0x10,0x01,0x03,0x10,
//   0x00,0x00,0x00,0x00,
//   0x00,0x00,0x00,0x00,
//   0x00,0x00,0x00,0x00,
//   0x00,0x00,0x00,0x00,
//   0x00,0x00,0x00
// ])

const bf = new Uint8Array([
0x45,0x00,0x24,0x00,0xcc,0x1a,0x00,0x00,0x40,0x01,0x00,0x00,0xac,0x12,0xe5,0x45,0xac,0x12,0xe5,0x45,0x03,0x03,0xea,0x1a,0x00,0x00,0x00,0x00,0x45,0x00,0x80,0x00,0x60,0xff,0x00,0x00,0x40,0x11,0x00,0x00,0xac,0x12,0xe5,0x45,0xac,0x12,0xe5,0x45,0xe6,0x7b,0x22,0xb8,0x00,0x6c,0x00,0x00,0x00,0x00,0x00,0x00
]);

const len= cSocket.sendto({address:'172.18.229.69', port: 8888}, bf);


console.log(len);

