//your JS code here. If required.
        function incrementCounter() {
            // Get the current counter value
            var currentCounter = document.getElementById("counter").innerText;

            // Display an alert with the un-incremented value
            // alert("Un-incremented Value: " + currentCounter);

            // Increment the counter value
            var newCounter = parseInt(currentCounter) + 1;

            // Update the counter display
            document.getElementById("counter").innerText = newCounter;
        }