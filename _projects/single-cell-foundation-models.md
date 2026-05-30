---
layout: page
title: "Transformer adaptation for single-cell perturbations"
description: "LoRA adaptation, out-of-distribution perturbation benchmarks, and flow-matching designs for single-cell foundation models."
importance: 2
category: research
---

*Wei Li Lab, University of Maryland Institute for Health Computing. Started November 2025; continuing full-time through summer 2026.*

This work extends and analyzes transformer-based perturbation models for single-cell data. The base idea is to treat each cell as a sequence of gene tokens with expression values, encode it with a transformer, inject perturbation context, and predict reconstruction, cell type, perturbation identity, or the next perturbed cell state.

My contributions are on the adaptation and evaluation side: architecture notes for pertTF, OOD in-silico perturbation benchmark scripts, LoRA/PEFT fine-tuning experiments, and design work for replacing deterministic next-state prediction with conditional latent transport. I also experimented with parameter-efficient adaptation of scGPT using a LoRA adapter, framing pretrained single-cell models as useful encoders but not as magic black boxes.

The main technical question is whether a foundation-model representation helps when perturbations, cell types, or assay conditions shift. That means the interesting part is the split design and negative controls, not just a lower training loss.

**Tools:** PyTorch, Hugging Face/PEFT, LoRA, scGPT, transformer encoders, perturbation-conditioned latent transitions, flow-matching design.
