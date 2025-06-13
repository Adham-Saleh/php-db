<template lang="pug">
    UAlert(
      title="Prerequests"
      icon="i-lucide-terminal"
      class="mb-5"
      variant="outline"
    )
      template(#description) 
        p You must have some knowlage with db setup before going through this. #[NuxtLink(to="/php-setup" class="underline") PHP database setup]
    AppSection(title="PHP CRUD operations" :sections)
</template>

<script setup lang="ts">
const sections = [
  {
    id: "db-select",
    description: "Retrieve data from database",
    contentTitle: "Select operation",
    content: `<?php

$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    echo $row['username'];
}

?>`,
  },
  {
    id: "db-insert",
    description: "Create new data to the database",
    contentTitle: "Insert operation",
    content: `<?php

$sql = "INSERT INTO users (username, email) VALUES ('john', 'john@example.com')";
if (mysqli_query($conn, $sql)) {
    echo "New record created";
}

?>`,
  },
  {
    id: "db-insert-safe",
    description: "Create new data to the database using safer approach",
    contentTitle: "Insert operation - Safe",
    content: `<?php

$stmt = mysqli_prepare($conn, "INSERT INTO users (username, email) VALUES (?, ?)");
mysqli_stmt_bind_param($stmt, $username, $email);
$username = "adham";
$email = "adhamsaleh@example.com";
mysqli_stmt_execute($stmt);

?>`,
  },
  {
    id: "db-update",
    description: "Update data in the database",
    contentTitle: "Update operation",
    content: `<?php

$sql = "UPDATE users SET email='new@example.com' WHERE id=1";
mysqli_query($conn, $sql);

?>`,
  },
  {
    id: "db-delete",
    description: "Remove data in the database",
    contentTitle: "Delete operation",
    content: `<?php

$sql = "DELETE FROM users WHERE id=1";
mysqli_query($conn, $sql);

?>`,
  },
];
</script>

<style scoped></style>
