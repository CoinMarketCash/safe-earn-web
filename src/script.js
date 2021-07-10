




function showModal() {
	$('#donationModal').modal('show');
}

function hideModal() {
	$('#donationModal').modal('hide');
}



//This is called when user clicks the first "send donation" button
const checkMetaAndShowModal = async () => {
	const metaConnect = await window.ethereum.request({ method: 'eth_requestAccounts' });
	showModal(); // open donation modal
}


const web3 = new Web3(window.ethereum);

const sendDonation = async (donationValue) => {
	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
	await window.ethereum
		.request({
			method: 'eth_sendTransaction',
			params: [
				{
					from: accounts[0],
					to: '0x89141eEFCeAb72dC3425E0bC690f49D91f411fA2',
					value: parseInt(web3.utils.toWei(donationValue.toString(),"ether")).toString(16)
				},
			],
		}, (err, res) => {
			console.log(err)
			console.log(res)
		});

	$("#thx-for-donate").fadeIn();
	setTimeout(function() {
		hideModal();
		$("#thx-for-donate").hide();
	}, 2000)


}




$(document).ready(function(){

	console.log(window.innerWidth);
	//$(".overlay").css("background-color","#566467");

	$("#thx-for-donate").hide();

	$("#donateButton").on("click", () => {
		checkMetaAndShowModal();
	});

	$(".donation-button").click(function() {
		sendDonation($(this).data("exact-value"));
	});
});






