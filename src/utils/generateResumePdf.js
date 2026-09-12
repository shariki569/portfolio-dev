import {
  personal,
  summary,
  skills,
  experience,
  education,
  projects,
  resumeMeta,
} from '../data/resume';

/** ATS-friendly, single-column, industry-standard resume PDF */
export async function generateResumePdf() {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ unit: 'pt', format: 'letter' });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const marginX = 54;
  const maxW = pageW - marginX * 2;
  let y = 48;
  const ink = '#1a1f2e';
  const muted = '#4b5563';
  const rule = '#c5cad3';

  const ensureSpace = (needed = 60) => {
    if (y + needed > pageH - 48) {
      doc.addPage();
      y = 48;
    }
  };

  const sectionTitle = (label) => {
    ensureSpace(36);
    y += 10;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(ink);
    doc.text(label.toUpperCase(), marginX, y);
    y += 4;
    doc.setDrawColor(rule);
    doc.setLineWidth(0.8);
    doc.line(marginX, y, pageW - marginX, y);
    y += 14;
  };

  const bodyText = (text, opts = {}) => {
    const size = opts.size || 9.5;
    const leading = opts.leading || 13;
    doc.setFont('helvetica', opts.bold ? 'bold' : 'normal');
    doc.setFontSize(size);
    doc.setTextColor(opts.color || muted);
    const lines = doc.splitTextToSize(text, opts.width || maxW);
    ensureSpace(lines.length * leading + 8);
    doc.text(lines, marginX + (opts.indent || 0), y);
    y += lines.length * leading;
  };

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(ink);
  doc.text(personal.fullName.toUpperCase(), pageW / 2, y, { align: 'center' });
  y += 18;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(ink);
  doc.text(personal.title, pageW / 2, y, { align: 'center' });
  y += 14;

  doc.setFontSize(8.5);
  doc.setTextColor(muted);
  doc.text(
    [personal.location, personal.phone, personal.email].join('  |  '),
    pageW / 2,
    y,
    { align: 'center' }
  );
  y += 11;
  doc.text(
    `${personal.linkedin.replace('https://', '')}  |  ${personal.portfolio.replace('https://', '')}`,
    pageW / 2,
    y,
    { align: 'center' }
  );
  y += 8;

  doc.setDrawColor(ink);
  doc.setLineWidth(1.2);
  doc.line(marginX, y, pageW - marginX, y);
  y += 6;

  sectionTitle('Professional Summary');
  bodyText(summary);

  sectionTitle('Core Skills');
  Object.entries(skills).forEach(([group, items]) => {
    ensureSpace(20);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(ink);
    const label = `${group.replace(/([A-Z])/g, ' $1').trim()}: `;
    const labelW = doc.getTextWidth(label);
    doc.text(label, marginX, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(muted);
    const valueLines = doc.splitTextToSize(items.join(', '), maxW - labelW);
    doc.text(valueLines[0], marginX + labelW, y);
    y += 13;
    for (let i = 1; i < valueLines.length; i += 1) {
      doc.text(valueLines[i], marginX + labelW, y);
      y += 13;
    }
  });

  sectionTitle('Professional Experience');
  experience.forEach((job) => {
    ensureSpace(70);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(ink);
    doc.text(job.title, marginX, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(muted);
    doc.text(job.duration, pageW - marginX, y, { align: 'right' });
    y += 13;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(9.5);
    doc.setTextColor(ink);
    doc.text(`${job.company} — ${job.location}`, marginX, y);
    y += 12;

    job.bullets.forEach((bullet) => {
      const lines = doc.splitTextToSize(bullet, maxW - 14);
      ensureSpace(lines.length * 12 + 4);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(muted);
      doc.text('•', marginX, y);
      doc.text(lines, marginX + 12, y);
      y += lines.length * 12 + 2;
    });
    y += 6;
  });

  sectionTitle('Education');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(ink);
  doc.text(education.degree, marginX, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(muted);
  doc.text(education.duration, pageW - marginX, y, { align: 'right' });
  y += 13;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9.5);
  doc.setTextColor(ink);
  const schoolLines = doc.splitTextToSize(
    `${education.school} — ${education.location}`,
    maxW
  );
  doc.text(schoolLines, marginX, y);
  y += schoolLines.length * 12 + 4;
  bodyText(`Thesis: ${education.thesis}`);
  bodyText(`Relevant coursework: ${education.coursework.join(', ')}`);

  sectionTitle('Selected Projects');
  projects.slice(0, 4).forEach((project) => {
    ensureSpace(40);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(ink);
    doc.text(project.title, marginX, y);
    y += 12;
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(muted);
    doc.text(project.stack, marginX, y);
    y += 11;
    bodyText(project.description);
    y += 4;
  });

  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i += 1) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor('#9ca3af');
    doc.text(
      `Updated ${resumeMeta.lastUpdated}  ·  Generated from portfolio source of truth`,
      pageW / 2,
      pageH - 24,
      { align: 'center' }
    );
  }

  doc.save(resumeMeta.fileName);
}

export function downloadResume() {
  generateResumePdf().catch((err) => {
    console.error('Resume download failed', err);
  });
}
