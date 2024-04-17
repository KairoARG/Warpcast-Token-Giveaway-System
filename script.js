document.getElementById('startButton').addEventListener('click', async () => {
  try {
    const userId = 123; // Replace with actual user ID
    const response = await fetch(`/checkFollowAndRecast/${userId}`);
    const data = await response.json();
    const messageElement = document.getElementById('message');
    messageElement.textContent = data.message;
    if (data.message === 'User has followed and recasted.') {
      messageElement.classList.remove('error');
      messageElement.textContent = 'Checking if you have daily allocation available...';
      // Call function to check daily allocation and continue the process
      // Implement similar steps for the rest of the process
    } else {
      messageElement.classList.add('error');
    }
  } catch (error) {
    console.error('Error:', error);
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'Error checking follow and recast status.';
    messageElement.classList.add('error');
  }
});
