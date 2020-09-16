<?php


/**
 * DevCafe Solutions Limited operates as a software development company with the following role hierarchy.
CEO
-CTO
--Senior Architect
---Software Engineer
--Quality Assurance Engineer
--User Interface Designer
-CFO
-CMO
-COO


 * Question:
 * Given the role above, design a tree data structure that mimics this organization structure
 * 
 * 
 */

class TreeNode
{
  public $data = null;
  public $children = [];
  public function __construct(string $data = null)
  {
    $this->data = $data;
  }
  public function addChildren(TreeNode $node)
  {
    $this->children[] = $node;
  }
}

class Tree
{
  public $root = null;
  public function __construct(TreeNode $node)
  {
    $this->root = $node;
  }
  public function traverse(TreeNode $node, int $level = 0)
  {
    if ($node) {
      echo str_repeat("-", $level);
      echo $node->data . "\n";
      foreach ($node->children as $childNode) {
        $this->traverse($childNode, $level + 1);
      }
    }
  }
}

$ceo = new TreeNode("CEO");
$cto = new TreeNode("CTO");
$cfo = new TreeNode("CFO");
$cmo = new TreeNode("CMO");
$coo = new TreeNode("COO");
$seniorArchitect = new TreeNode("Senior Architect");
$softwareEngineer = new TreeNode("Software Engineer");
$userInterfaceDesigner = new TreeNode("User Interface Designer");
$qualityAssuranceEngineer = new TreeNode("Quality Assurance Engineer");


$ceo->addChildren($cto);
$ceo->addChildren($cfo);
$ceo->addChildren($cmo);
$ceo->addChildren($coo);
$cto->addChildren($seniorArchitect);
$seniorArchitect->addChildren($softwareEngineer);
$cto->addChildren($qualityAssuranceEngineer);
$cto->addChildren($userInterfaceDesigner);

$tree = new Tree($ceo);
$tree->traverse($tree->root);
