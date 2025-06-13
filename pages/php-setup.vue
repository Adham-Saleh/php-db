<template lang="pug">
    AppSection(title="PHP Database Setup" :sections)
</template>

<script setup lang="ts">
const sections = [
  {
    id: "php-sqli-init",
    description: "Connect php to a database using mysqli_conect",
    contentTitle: "Establish database connection",
    content: `<?php

$conn = mysqli_connect("localhost", "username", "password", "database_name");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

?>`,
  },
  {
    id: "php-sqli-close-connection",
    description: "Abort database connection",
    contentTitle: "Abort database connection",
    content: `<?php

mysqli_close($conn);

?>`,
  },
];
</script>

<style scoped></style>
