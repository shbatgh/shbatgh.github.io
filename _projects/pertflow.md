---
layout: page
title: "PertFlow: flow matching for perturbation prediction"
description: "Research prototype for single-cell perturbation prediction using ESMC embeddings, Sinkhorn OT pseudo-pairs, and flow-matching heads."
importance: 1
category: research
---

*Wei Li Lab, University of Maryland Institute for Health Computing. Started November 2025; continuing full-time through summer 2026.*

PertFlow is a compact research prototype for modeling perturbation-associated shifts in single-cell RNA expression. Given a control (unperturbed) expression profile and a target gene perturbation, it predicts a perturbed expression-state estimate rather than an observed same-cell before/after trajectory.

<div class="project-at-a-glance" markdown="1">

## At a glance

- **Input:** a control single-cell expression profile and a target perturbation.
- **Conditioning:** a cached ESMC protein-sequence embedding for the target gene product.
- **Pairing:** cell-type-restricted Sinkhorn optimal transport (OT) pseudo-pairs between control and perturbed cells.
- **Models:** multilayer perceptron (MLP) point-prediction baselines and flow-matching heads, including direct rectified flow and a SelfFlow-style variant.
- **Evaluation:** in-distribution and held-out perturbation splits with ablations for OT space and perturbation embeddings.

</div>

## Method

The key assumption is that control and perturbed cells are distributionally related, but not same-cell measurements. I construct weak control-to-perturbed pseudo-pairs within cell type using Sinkhorn OT, then train a cell encoder conditioned on the perturbation embedding. The flow heads use a vector-field objective between control and perturbation-associated expression states instead of only predicting a deterministic endpoint.

## Evaluation

The evaluation suite asks whether flow matching improves over MLP point predictors, whether latent-space or expression-space OT produces better pseudo-pairs, and whether the ESMC perturbation embedding adds signal beyond a zeroed-embedding control. Metrics include aligned mean squared error (MSE), mean absolute error (MAE), Pearson correlation, maximum mean discrepancy (MMD), and cell-mean MAE. The goal is an ablation scaffold that exposes pairing assumptions and failure modes, not a finished benchmark claim.

**Tools:** PyTorch, AnnData/H5AD, Scanpy-style preprocessing, POT/Sinkhorn OT, ESMC embeddings, rectified flow, flow matching.
