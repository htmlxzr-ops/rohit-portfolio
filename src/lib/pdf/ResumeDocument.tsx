import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
    color: "#1a1a1a",
  },
  name: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 2,
  },
  title: {
    fontSize: 13,
    color: "#444444",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    marginTop: 18,
    marginBottom: 8,
    borderBottom: "1pt solid #cccccc",
    paddingBottom: 4,
  },
  paragraph: {
    marginBottom: 6,
    lineHeight: 1.5,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 2,
  },
  itemMeta: {
    fontSize: 10,
    color: "#666666",
    marginBottom: 4,
  },
  skillRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  bullet: {
    marginBottom: 3,
    marginLeft: 10,
  },
  contactRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
    fontSize: 10,
    color: "#444444",
  },
});

export default function ResumeDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>Rohit Alam</Text>
        <Text style={styles.title}>Full Stack Developer</Text>

        <View style={styles.contactRow}>
          <Text>github.com/htmlxzr-ops</Text>
          <Text>linkedin.com/in/html-xzr-a36a323a0</Text>
          <Text>x.com/HtmlXzr13714</Text>
        </View>

        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.paragraph}>
          Student and self-taught Full Stack Developer, learning Python and
          building a strong foundation in cyber security. Builds modern,
          secure, and scalable web applications with security treated as a
          core design decision rather than an afterthought.
        </Text>

        <Text style={styles.sectionTitle}>Skills</Text>
        {skills.map((skill) => (
          <View key={skill.name} style={styles.skillRow}>
            <Text>{skill.name}</Text>
            <Text style={{ color: "#666666" }}>{skill.level}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Projects</Text>
        {projects.map((project) => (
          <View key={project.slug} style={{ marginBottom: 10 }}>
            <Text style={styles.itemTitle}>
              {project.title} — {project.status} ({project.progress}%)
            </Text>
            <Text style={styles.itemMeta}>{project.description}</Text>
            {project.features.map((feature) => (
              <Text key={feature} style={styles.bullet}>
                • {feature}
              </Text>
            ))}
          </View>
        ))}

        <Text style={styles.sectionTitle}>Education & Background</Text>
        <Text style={styles.paragraph}>
          Self-taught, student. Currently learning Python and continuing to
          build a deeper foundation in cyber security alongside active
          project work.
        </Text>
      </Page>
    </Document>
  );
}
