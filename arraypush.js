const hewan =['singa', 'ular', 'harimau'], tambahan =['buaya', 'beruang', 'cacing', {obj: 'rusa'}]
const arrayPushHewan = async () =>{
    await tambahan.map(res => hewan.push(res))
    console.log(hewan);
}

arrayPushHewan();
/*NOTE:
array map adalah fungsi perulangan array seperti for in dan
fareach
*/
