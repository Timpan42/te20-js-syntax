/*public class Beans {
	public static void main(String[] args) {
		String s = JOptionPane.showInputDialog("Hur mycket kostar gurkan");
		double momspris = Double.parseDouble(s);
		double pris = momspris / 1.25;
		double moms = pris * 0.25;
		String b = moms + "kr";	
		String c = pris + "kr";
		JOptionPane.showMessageDialog(null,"Gurkans moms är " + b + "och dess pris exklusive moms är " + c);
	}
}*/

const input = document.querySelector('#input-field');
const button = document.querySelector('button');

button.addEventListener('click', () =>{
    const num = input.value;
    
    const c = Math.round(Math.sqrt(anum*anum + bnum*bnum));
    if(Number.isNaN(c)){
        alert('ju dumdum')
    }
   
    const messageBox = document.querySelector('#message-box');
    let message = document.createElement('p');
    message.textContent = `Hypotenusan är ${c}`;
    messageBox.appendChild(message);

});

