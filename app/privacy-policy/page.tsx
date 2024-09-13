"use client"
import { Footer } from '@/components/Footer/Footer';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { Container, List, Text, Title } from '@mantine/core';

export default function PrivacyPolicy() {
  return (
    <>
      <HeaderMenu />
      <Container size="md" mt="80px" mb="md">
        <Title order={1} mb="20px">Privacy Policy</Title>
        <div>
          <Title order={3}>Introduction</Title>
          <Text fz="md" lh="md">
            At VoxQ, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website, services, and products, including our CRM and CMS solutions. By using our services, you agree to the terms outlined in this policy.
          </Text>
        </div>
        <div>
          <Title order={3}>Sharing of Information</Title>
          <Text fz="md" lh="md">
            We do not sell or share your personal information with third parties, except in the following cases:
          </Text>
          <List>
            <List.Item>Service Providers: We may share your information with trusted third-party vendors who assist us in providing our services, such as hosting or data analytics. These parties are bound by confidentiality agreements.</List.Item>
            <List.Item>Legal Obligations: We may disclose your information if required to comply with legal obligations, government requests, or to protect the rights, property, and safety of [Your Company Name], our users, or the public.</List.Item>
          </List>
        </div>
        <div>
          <Title order={3}>Contact Us</Title>
          <Text fz="md" lh="md">
            If you have any questions about this Privacy Policy or how we handle your personal data, please reach out to us at:
            <br />
            <br />
            Email: vox-q@outlook.com
            <br />
            <br />
            Thank you for trusting VoxQ. We are committed to protecting your privacy while delivering the best possible service.
          </Text>
        </div>
      </Container>
      <Footer />
    </>
  );
}
