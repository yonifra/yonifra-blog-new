---
name: blog-post-creation
description: A skill for creating a new blog post with standardized folder structure, frontmatter, and a generated hero image.
---

# Blog Post Creation Skill

This skill guides an agent through the process of creating a new blog post in this repository.

## Instructions

1.  **Preparation:**
    - Identify the topic and current date.
    - Create a directory name following the pattern: `YYYY-MM-DD-short-slug`.
    - Create the directory path: `content/posts/<directory-name>/images`.

2.  **Asset Generation:**
    - Generate a high-quality hero image using a suitable tool (e.g., `generate_image`).
    - Save the image to the `content/posts/<directory-name>/images/hero.jpg`.

3.  **Content Creation:**
    - Create an `index.mdx` file in the post directory.
    - Include the following mandatory frontmatter:
        ```yaml
        ---
        title: "[Post Title]"
        author: "Jonathan Fraimorice"
        date: YYYY-MM-DD
        hero: ./images/hero.jpg
        excerpt: "[Short 1-2 sentence compelling summary]"
        ---
        ```
    - Write the content using standard Markdown/MDX. Use headers (`###`) and bullet points for readability.

4.  **Verification:**
    - Ensure the `hero` path in frontmatter correctly points to the generated image.
    - Check that the date matches the folder prefix.
    - Verify that the excerpt is engaging.

## Example Workflow

- **Input:** "Write a post about AI agent skills."
- **Action:**
    - Create `content/posts/2026-01-02-ai-agent-skills/images/`.
    - Generate hero image.
    - Write `index.mdx` with metadata and deep-dive content.
