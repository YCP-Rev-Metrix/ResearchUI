<script setup>
// imports
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>About RevMetrix</template>
    <a href="https://github.com/YCP-Rev-Metrix/" target="_blank" rel="noopener">RevMetrix</a> is the latest Capstone project at <a href="https://ycp.edu" target="_blank" rel="noopener">York College of Pennsylvania</a> which started during the Fall 2023 semester.
    It is composed of a mobile application and hardware module designed to analyze and provide feedback on bowler performance. The app builds upon Dr. David Babcock's "Ciclopes" program,
    offering shot tracking and post-session analysis, while the hardware, an enhanced version of Professor Donald Hake II's SmartDot Module, features a 3-axis accelerometer and ambient light sensor to record ball rotation data.
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>
    All documentation regarding the current state and development of RevMetrix can be found on the official documentation page at <a href="https://docs.revmetrix.io" target="_blank" rel="noopener">docs.revmetrix.io</a>.
    <br>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Research UI</template>
    The purpose of the Research UI is to supply Professor Hake II with the necessary resources to pull data from the project's research database. By providing this solution,
    data is able to be requested from the research database through the form on the <a href="/search" target="_blank" rel="noopener">search</a> page, where the user fills out what is essentially a SQL query from dropdowns and submits the request.
  </WelcomeItem>
</template>
