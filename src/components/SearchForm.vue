<script setup>

</script>

<template>
  <div class="page">
    <form id="dataRequest" class="needs-validation" novalidate>
      <div class="mb-3 inputLine">
        <span class="input-group-text namePiece">FROM</span>
        <select class="form-select dropStyle" id="dropdownValidation1" required>
          <option selected>Choose</option>
          <option value="1">Populate dropdown with tables</option>
          <option value="2">Users</option>
        </select>
        <div class="invalid-feedback">
          Please select a valid option
        </div>
      </div>
      <div class="mb-3 inputLine">
        <span class="input-group-text namePiece">SELECT</span>
        <select class="form-select dropStyle" id="dropdownValidation2" required>
          <option selected>Choose</option>
          <option value="1">*</option>
          <option value="2">Populate dropdown with columns from selected table</option>
          <option value="3">User_ID</option>
        </select>
        <div class="invalid-feedback">
          Please select a valid option
        </div>
      </div>
      <div class="mb-3 inputLine">
        <span class="input-group-text namePiece">WHERE</span>
        <select class="form-select dropStyle" id="dropdownValidation3" required>
          <option selected>Choose</option>
          <option value="1">None</option>
          <option value="2">Populate dropdown with column names</option>
        </select>
        <div class="invalid-feedback">
          Please select a valid option
        </div>
      </div>
      <div class="mb-3 inputLine">
        <span class="input-group-text namePiece">ORDER BY</span>
        <select class="form-select dropStyle" id="dropdownValidation4" required>
          <option selected>Choose</option>
          <option value="1">None</option>
          <option value="2">Populate dropdown with column names</option>
          <option value="3">Username</option>
        </select>
        <div class="invalid-feedback">
          Please select a valid option
        </div>
      </div>
      <div class="mb-3 inputLine">
        <span class="input-group-text namePiece">ASC | DESC</span>
        <select class="form-select dropStyle" id="dropdownValidation5" required>
          <option selected>Choose</option>
          <option value="1">None</option>
          <option value="2">Ascending</option>
          <option value="3">Descending</option>
        </select>
        <div class="invalid-feedback">
          Please select a valid option
        </div>
      </div>
      <button type="submit" form="dataRequest" value="Submit" class="btn btn-primary btn-sm">Submit</button>
    </form>
  </div>
</template>

<style>
.page {
  width: 80%;
  margin: 5% auto auto;
}
.inputLine {
  display: flex;
  margin-bottom: 2%;
}
.inputLine span {
  display: flex;
  justify-content: center;
  background: white;
  color: rgb(78,113,170);
  font-weight: bold;
  width: 30%;
}
.dropStyle {
  width: 80%;
  color: rgb(78,113,170);
  font-weight: bold;
}
</style>

