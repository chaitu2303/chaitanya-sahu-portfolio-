import certificates from "@/data/certificates.json";

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issue_date: string;
  duration?: string;
  category: string;
  skills_gained: string[];
  priority_level: number;
  verification_available: boolean;
  description?: string;
};

export const getCertificates = (): Certificate[] => {
  return [...certificates].sort((a, b) => 
    new Date(b.issue_date).getTime() - new Date(a.issue_date).getTime()
  );
};

export const getTieredCertificates = () => {
  const all = getCertificates();
  return {
    tier1: all.filter(c => c.priority_level === 1),
    tier2: all.filter(c => c.priority_level === 2),
    tier3: all.filter(c => c.priority_level === 3),
    tier4: all.filter(c => c.priority_level === 4),
  };
};
