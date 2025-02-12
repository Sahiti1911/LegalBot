const express = require("express");
const router = express.Router();

// Dummy legal responses
const legalData = {
    {
        "What is contract law?": "Contract law governs agreements between parties, ensuring enforceability in court.",
        "What are my rights as a tenant?": "Tenant rights include protection against unlawful eviction, fair rent, and habitability standards.",
        "What is intellectual property?": "Intellectual property refers to creations of the mind, including patents, copyrights, and trademarks.",
        "What is tort law?": "Tort law addresses civil wrongs causing harm or loss, allowing victims to seek compensation.",
        "What is the statute of limitations?": "The statute of limitations sets deadlines for filing legal claims, varying by case type and jurisdiction.",
        "What are my rights when arrested?": "You have the right to remain silent, legal representation, and protection against unlawful searches.",
        "What is employment law?": "Employment law governs workplace rights, covering wages, discrimination, termination, and safety regulations.",
        "What is defamation?": "Defamation is a false statement that harms someone's reputation, classified as libel (written) or slander (spoken).",
        "What is due process?": "Due process ensures fair legal procedures before depriving individuals of life, liberty, or property.",
        "What is family law?": "Family law covers matters like marriage, divorce, child custody, and adoption.",
        "What is probate law?": "Probate law governs the process of administering a deceased person's estate, including asset distribution and debt settlement.",
        "What is criminal law?": "Criminal law defines offenses against society, prosecutable by the government, with punishments including fines and imprisonment.",
        "What is civil law?": "Civil law resolves disputes between individuals or organizations, typically involving compensation rather than criminal penalties.",
        "What is corporate law?": "Corporate law regulates the formation, governance, and operation of businesses, ensuring compliance with legal standards.",
        "What is bankruptcy law?": "Bankruptcy law provides legal options for individuals and businesses struggling with debt, including liquidation and restructuring.",
        "What is administrative law?": "Administrative law governs the actions of government agencies, ensuring they follow legal procedures.",
        "What is constitutional law?": "Constitutional law interprets the rights and powers established by a nation's constitution.",
        "What is international law?": "International law governs relations between nations, covering treaties, trade, human rights, and war regulations.",
        "What is environmental law?": "Environmental law regulates human impact on nature, addressing pollution, conservation, and sustainable development.",
        "What is cyber law?": "Cyber law covers legal issues related to the internet, data privacy, hacking, and digital transactions.",
        "What is real estate law?": "Real estate law governs the buying, selling, and use of land and property.",
        "What is antitrust law?": "Antitrust law prevents monopolies and promotes competition in the marketplace.",
        "What is tax law?": "Tax law regulates the collection of taxes and compliance with federal, state, and local tax codes.",
        "What is immigration law?": "Immigration law governs the rights and processes for individuals seeking to enter, live, or work in a country.",
        "What is human rights law?": "Human rights law protects fundamental freedoms and rights against government or institutional violations.",
        "What is consumer protection law?": "Consumer protection law ensures fair trade practices, product safety, and protection against fraud.",
        "What is personal injury law?": "Personal injury law allows individuals to seek compensation for injuries caused by another’s negligence.",
        "What is maritime law?": "Maritime law governs activities and disputes on international waters, including shipping and navigation.",
        "What is military law?": "Military law applies to service members, covering conduct, discipline, and court-martial proceedings.",
        "What is securities law?": "Securities law regulates financial markets, protecting investors from fraud and ensuring market transparency.",
        "What is social security law?": "Social security law governs benefits such as pensions, disability support, and unemployment insurance.",
        "What is healthcare law?": "Healthcare law regulates medical institutions, patient rights, and healthcare provider obligations.",
        "What is aviation law?": "Aviation law governs air travel, aircraft operations, and passenger rights.",
        "What is entertainment law?": "Entertainment law covers contracts, intellectual property, and disputes in the film, music, and sports industries."
      }
      
};

router.post("/ask", async (req, res) => {
  const { question } = req.body;
  const response = legalData[question] || "Sorry, I don't have information on that topic.";
  res.json({ response });
});

module.exports = router;
