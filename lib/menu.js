const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/ffhitmanff/hitmanmikav3

Instagram: https://instagram.com/ff.hitmanff

Best regards, hitmanmika.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
╭─「 *HITMAN MIKA* 」
║╭───────
║├「 *INFORMATION* 」
║│
║│ *Nama* : HITMAN-MIKA
║│ *Creator* : @ffhitmanff
║│*instagram : @ff.hitmanff
║│ *wa.me/6282156986313*
║╰───────
╰─「 *HITMAN-MIKA* 」

_-_-_-_-_-_-_-_-_-_-_-_-_-_

╭─「 *HITMAN MIKA* 」
║╭───────
║├「 *STATUS USER* 」
║│
║│ *Nama* : ${pushname}
║│ *Prefix :「 ${prefix} 」*
║│ *versi* : v 3.0
║╰───────
║╭───────
║├「 *Creator* 」
║│
║├ ${prefix}jail
║├ ${prefix}kiss
║├ ${prefix}blackpink
║├ ${prefix}text3d
║├ ${prefix}logopornhub
║├ ${prefix}sticker
║├ ${prefix}stickergif
║├ ${prefix}stickergiphy
║├ ${prefix}meme
║├ ${prefix}quotemaker
║├ ${prefix}nulis
║╰───────
║╭───────
║├ 「 *Education* 」
║│ 
║├ ${prefix}wiki
║├ ${prefix}brainly 
║├ ${prefix}kbbi 
║╰───────
║╭───────
║├ 「 *Islam* 」
║│ 
║├ ${prefix}infosurah
║├ ${prefix}surah
║├ ${prefix}tafsir
║├ ${prefix}ALaudio
║├ ${prefix}jsolat
║╰───────
║╭───────
║├ 「 *18+* 」
║├ ${prefix}nekopoi
║╰───────
║╭───────
║├ 「 *FUN MENU* 」
║│
║├ ${prefix}say
║├ ${prefix}kutuk
║├ ${prefix}santet
║├ ${prefix}dadu
║├ ${prefix}koin
║├ ${prefix}rate
║├ ${prefix}bisakah
║├ ${prefix}apakah
║├ ${prefix}kapankah
║├ ${prefix}simisimi
║├ ${prefix}antisticker
║├ ${prefix}antilink
║├ ${prefix}katakasar
║┷➥ ${prefix}klasmen
║╰───────
║╭───────
║├ 「 *Downloader* 」
║│
║├ ${prefix}ytmp3
║├ ${prefix}ytmp4
║├ ${prefix}facebook
║╰───────
║╭───────
║├ 「 *Primbon* 」
║│
║├ ${prefix}cekzodiak
║├ ${prefix}artinama
║├ ${prefix}cekjodoh
║╰───────
║╭───────
║├ 「 *Search Any* 」
║│
║├ ${prefix}google
║├ ${prefix}dewabatch
║├ ${prefix}images
║├ ${prefix}sreddit
║├ ${prefix}resep
║├ ${prefix}stalkig
║├ ${prefix}cuaca
║├ ${prefix}chord
║├ ${prefix}lirik
║├ ${prefix}ss
║├ ${prefix}play
║├ ${prefix}movie
║├ ${prefix}whatanime
║╰───────
║╭───────
║├ 「 *Random* 」
║│
║├ ${prefix}namaninja
║├ ${prefix}motivasi
║├ ${prefix}howgay
║├ ${prefix}fakta
║├ ${prefix}pantun
║├ ${prefix}katabijak
║├ ${prefix}quote
║├ ${prefix}cerpen
║├ ${prefix}cersex
║├ ${prefix}puisi
║╰───────
║╭───────
║├ 「 *Media* 」
║│
║├ ${prefix}anime
║├ ${prefix}kpop
║├ ${prefix}memes
║├ ${prefix}doggo
║├ ${prefix}wpanime
║╰───────
║╭───────
║├ 「 *Other* 」
║│
║├ ${prefix}shopee
║├ ${prefix}ping
║├ ${prefix}tts
║├ ${prefix}translate
║├ ${prefix}resi
║├ ${prefix}covidindo
║├ ${prefix}ceklokasi
║├ ${prefix}shortlink
║├ ${prefix}bapakfont
║├ ${prefix}hilihfont
║├ ${prefix}qrread
║├ ${prefix}qrcode
║├ ${prefix}spamcall
║├ ${prefix}spamcall2
║├ ${prefix}gcinfo
║╰───────
║╭───────
║├ 「 *Tentang BOT* 」
║│
║├ ${prefix}tnc
║├ ${prefix}donasi
║├ ${prefix}botstat
║├ ${prefix}ownerbot
║├ ${prefix}join
║╰───────
╰─「 *HITMAN-MIKA* 」

_-_-_-_-_-_-_-_-_-_-_-_-_-_

╭─「 *HITMAN MIKA* 」
║╭───────
║├ 「 *Owner Menu* 」
║│
║├ ${prefix}ban
║├ ${prefix}bc
║├ ${prefix}leaveall
║├ ${prefix}clearall
║╰───────
╰─「 *HITMAN-MIKA* 」

`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
╭─「 *HITMAN MIKA* 」
║╭───────
║├ 「 *Admin Menu* 」
║│
║├ ${prefix}add
║├ ${prefix}kick @tag
║├ ${prefix}promote @tag
║├ ${prefix}demote @tag
║├ ${prefix}mutegrup
║├ ${prefix}tagall
║├ ${prefix}setprofile
║├ ${prefix}del
║├ ${prefix}welcome
║├ ${prefix}grouplink
║├ ${prefix}revoke
║╰───────
╰─「 *HITMAN-MIKA* 」

_-_-_-_-_-_-_-_-_-_-_-_-_-_

╭─「 *HITMAN MIKA* 」
║╭───────
║├ 「 *PEMILIK GRUP!* 」
║├ ${prefix}kickall
║╰───────
╰─「 *HITMAN-MIKA* 」
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
───────「 *_DONASI_* 」───────────

*_Trakteer : https://trakteer.id/aqulzz_*
*_ Pulsa Telkom : 0821-5548-3269_*
*_Saweria : https://saweria.co/HITMANFF_*

───────「 *_HITMAN-MIKA_* 」───────






Terimakasih. HITMAN-MIKA`
}
