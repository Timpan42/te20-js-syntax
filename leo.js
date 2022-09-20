/*import javax.swing.*;

public class pythagoras{
	public static void main (String[] arg) {
	double a = Double.parseDouble (JOptionPane.showInputDialog("F\u00F6rsta sidan i triangeln"));
	double b = Double.parseDouble (JOptionPane.showInputDialog("Andra sidan i triangeln"));
	double c = Math.sqrt(a*a + b*b);
	JOptionPane.showMessageDialog (null, "Hypotenusans l\u00E4ngd \u00E4r " + c);
	}
}*/

const aInp = document.querySelector('#input-field-a');
const bInp = document.querySelector('#input-field-b');
const button = document.querySelector('button');

button.addEventListener('click', () =>{
    const anum = aInp.value;
    const bnum = bInp.value;
    const c = Math.round(Math.sqrt(anum*anum + bnum*bnum));
    if(Number.isNaN(c)){
        alert('ju dumdum')
    }
   
    const messageBox = document.querySelector('#message-box');
    let message = document.createElement('p');
    message.textContent = `Hypotenusan är ${c}`;
    messageBox.appendChild(message);

});
