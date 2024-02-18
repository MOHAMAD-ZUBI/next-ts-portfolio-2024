

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const owner = 'MOHAMAD-ZUBI';
  const repo = 'next-ts-portfolio-2024';
  const token = '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';
  
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  if (!response.ok) {
    res.status(response.status).json({ error: 'Failed to fetch repository information' });
    return;
  }

  const data = await response.json();
  const repoInfo = {
    forks: data.forks_count,
    stars: data.stargazers_count,
  };

  res.status(200).json(repoInfo);
}
